import axios from "axios";
var moment = require('moment')
var currentDate = moment().format("YYYY-MM-DD")

export default {
    getLeaguesFrom: function (country) {
        return axios.get("https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=" + country + "&s=Soccer")
    },

    getAllCountries: function () {
        return axios.get("https://www.thesportsdb.com/api/v1/json/1/all_countries.php")
    },

    getLeagueById: function (idLeague) {
        return axios.get("https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=" + idLeague)
    },

    getTeamById: function (teamdId) {
        return axios.get("https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=" + teamdId)
    },

    getPlayersByTeamId: function (teamdId) {
        return axios.get("https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=" + teamdId)
    },

    getLiveScores: function () {
        return axios.get("https://www.thesportsdb.com/api/v2/json/1/livescore.php?s=Soccer")
    },

    getDailyMatches: function () {
        return axios.get("https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=" + currentDate + "&s=Soccer")
    }
}
