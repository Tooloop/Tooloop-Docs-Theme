const Search = Vue.createApp({
    name: "Search",
    data() {
        return {
            isActive: false,
            query: "",
            results: [],
            timeout: null,
            selected: -1,
            lang: null
        }
    },
    computed: {
        api() {
            return "search?q=";
        }
    },
    created() {
        this.lang = document.getElementsByTagName("html")[0].lang;
        window.addEventListener("keydown", this.onKeyDown);
    },
    mounted() {
        this.$refs.background.addEventListener("click", this.hide);
    },
    watch: {
        query() {
            if (this.query.length == "") {
                this.results = [];
            }
            else if (this.query.length <= 2) {
                this.results = [];
            }
            else {
                this.search();
            }

            // on desktop select first entry for keyboard navgiation
            if (window.matchMedia('(min-width: 1024px)').matches) {
                this.selected = 0;
            }
        },
    },
    methods: {
        show() {
            this.isActive = true;
            try { TourMenu.hide(); } catch (e) { }
            Sidebar.hide();
            this.focus();
        },
        hide() {
            this.isActive = false;
        },
        clear() {
            this.query = '';
            this.focus();

        },
        debounce(callback, delay = 250) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                callback();
            }, delay);
        },
        search(query) {
            if (!query) query = this.query;

            fetch(this.api + query)
                .then(response => response.json())
                .then(response => {
                    this.results = response;
                })
                .catch(error => console.error(error)); // TODO: proper error handling
        },
        focus() {
            this.$refs.searchfield.focus();
        },
        visit() {
            if (this.results.length > 0)
                document.location = this.results[this.selected].url;
        },
        selectResult(position) {
            this.selected = Math.min(Math.max(this.selected + position, 0), this.results.length - 1);
        },
        onKeyDown(keyboardEvent) {
            if (keyboardEvent.key == 'Escape') this.hide();
            else if (keyboardEvent.key == 'Enter') this.visit();
            else if (keyboardEvent.key == 'ArrowUp') {
                this.selectResult(-1);
                return false;
            }
            else if (keyboardEvent.key == 'ArrowDown') {
                this.selectResult(+1);
                return false;
            }
        }
    }

}).mount("#search");


document.addEventListener('DOMContentLoaded', function () {
    // Search.show();
    // Search.query = "graf";
});