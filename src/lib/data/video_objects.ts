
/*

{    
    video_id: "",
    title: "",
    player: "",
    social_link: "",
    tags: ["", ""],
    url: "/SplatoonVodsIntro.mp4"
},

*/
const rawVideos = [
    {
        video_id: "iuHye7yv78Q",
        title: "Area Cup 35 - とある's 3700XP tetra pov",
        player: "maedasatoshi - とある",
        social_link: "https://www.youtube.com/@maedasatoshi-l2t",
        tags: ['top level', 'tetra', 'area cup', '3700 xp', 'zones'],
        url: "/SplatoonVodsIntro.mp4"
    },
    {
        video_id: "BkGzFA17CnE",
        title: "Grey - Money Match 8s (150€ prize)",
        player: "Grey",
        social_link: "https://sendou.ink/u/grey",
        tags: ['top level', 's blast', 'div X', '8s'],
        url: "/2025-06-07 20-06-22.mp4"
    },
    
];


const processedVideos = rawVideos.map(({ video_id, title, url, player, social_link, tags }) => {
    return {
        video_id,
        title,
        player,
        social_link,
        tags,
        lowerTitle: title.toLowerCase(),
        lowerPlayer: player.toLowerCase(),
        lowerTags: tags.map((tag) => tag.toLowerCase()),
        url
    };
});


export default processedVideos;
