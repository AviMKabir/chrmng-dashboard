function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
    url = "https://public.tableau.com/views/ChrmngSpotifyDataApriltomid-May/Listeners?:display_count=y&publish=yes&:origin=viz_share_link";

    var viz = new tableau.Viz(containerDiv, url);
}

function initViz2() {
    var containerDiv = document.getElementById("vizContainer2"),
    url = "https://public.tableau.com/views/ChrmngSpotifyDataApriltomid-May/Streams?:display_count=y&:origin=viz_share_link";

    var viz = new tableau.Viz(containerDiv, url);
}
