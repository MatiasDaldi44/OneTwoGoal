import axios from "axios";

export default {
    getLeaguesFrom: function (country) {
        return axios.get("https://www.thesportsdb.com/api/v1/json/4013017/search_all_leagues.php?c=" + country + "&s=Soccer")
    },

    getAllCountries: function () {
        return axios.get("https://www.thesportsdb.com/api/v1/json/4013017/all_countries.php")
    },

    getLeagueById: function (idLeague) {
        return axios.get("https://www.thesportsdb.com/api/v1/json/4013017/lookup_all_teams.php?id=" + idLeague)
    },

    getTeamById: function (teamdId) {
        return axios.get("https://www.thesportsdb.com/api/v1/json/4013017/lookupteam.php?id=" + teamdId)
    }
}
