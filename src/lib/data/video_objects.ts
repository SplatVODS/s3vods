
/*

{
    video_id: "",
    title: "",
    player: "",
    social_link: "",
    tags: ["", ""],
    url: ""
},

*/
const rawVideos = [
    {
        video_id: "iuHye7yv78Q",
        title: "Area Cup 35 - とある's 3700XP tetra pov",
        player: "Maedasatoshi - とある",
        social_link: "https://www.youtube.com/channel/UC3LfL8bHRRVL7Q0KHyTwuYw",
        tags: ['top level', 'tetra', 'area cup', '3700 xp', 'zones', 'jp'],
        url: "https://www.youtube.com/watch?v=iuHye7yv78Q"
    },
    {
        video_id: "BkGzFA17CnE",
        title: "Grey - Money Match 8s (150€ prize)",
        player: "Grey",
        social_link: "https://sendou.ink/u/grey",
        tags: ['top level', 's blast', 'div X', '8s', 'eu'],
        url: ""
    },
    {
        video_id: "kNtbV8KpfnY",
        title: "Splat World Series Finals - The Invincible Fleet Rei Maru",
        player: "Lobstar",
        social_link: "https://x.com/tt_Iv_",
        tags: ['top level', 's blast', '4900 xp', 'jp'],
        url: "https://www.youtube.com/watch?v=kNtbV8KpfnY"
    },
    {
        video_id: "Z20d3vrI4EA",
        title: "Splat World Series Finals - Utopia",
        player: "Kyamii",
        social_link: "https://x.com/kylxqi",
        tags: ['top level', 'slosher', '3713 xp', 'jp'],
        url: "https://www.youtube.com/watch?v=Z20d3vrI4EA"
    },
    {
        video_id: "gRXKgd-7FGs",
        title: "Splat World Series Finals - The Invincible Fleet Rei Maru",
        player: "Garandou (Grand Roll)",
        social_link: "https://x.com/Grand_Roll",
        tags: ["top level", "dread", "4013 xp", 'jp'],
        url: "https://www.youtube.com/watch?v=gRXKgd-7FGs"
    },
    {
        video_id: "EDaJkWFs-AA",
        title: "Splat World Series Finals - False Dream",
        player: "Shuman",
        social_link: "https://x.com/08Shuman",
        tags: ["top level", "splash", "3809 xp", 'jp'],
        url: "https://www.youtube.com/watch?v=EDaJkWFs-AA"
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
