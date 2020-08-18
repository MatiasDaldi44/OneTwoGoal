import axios from "axios";

export default {
    getLeaguesFrom: function (country) {
        return axios.get("https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=" + country + "&s=Soccer")
    }
}