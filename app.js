function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
    url = "https://public.tableau.com/views/ChrmngSpotifyDataApril-May2020/Dashboard2?:embed=y&:embed_code_version=3&:loadOrderID=0&:display_count=y&:origin=viz_share_link";

    var viz = new tableau.Viz(containerDiv, url);
}

