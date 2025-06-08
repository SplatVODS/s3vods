
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
        video_id: "BkGzFA17CnE",
        title: "Grey - Money Match 8s (150€ prize)",
        player: "Grey",
        social_link: "",
        tags: ['top level', 's blast', 'div X', '8s'],
        url: "/2025-06-07 20-06-22.mp4"
    },
    {
        video_id: "ZxxHfPM7NT8",
        title: "In The Zone",
        player: "Player",
        social_link: "https://example.com",
        tags: ["pen", "top level"],
        url: "/SplatoonVodsIntro.mp4"
    },
    {
        video_id: "ZxxHfPM7NT8",
        title: "SendouQ Finals",
        player: "Player",
        social_link: "https://example.com",
        tags: ["slosher", "top level"],
        url: "/SplatoonVodsIntro.mp4"
    },
    {
        video_id: "ZxxHfPM7NT8",
        title: "Area Cup",
        player: "Player",
        social_link: "https://example.com",
        tags: [".52 gal", "top level"],
        url: "/SplatoonVodsIntro.mp4"
    },
    {
        video_id: "ZxxHfPM7NT8",
        title: "Clam Blitz Battle",
        player: "Player",
        social_link: "https://example.com",
        tags: ["clam blitz", "pro"],
        url: "/SplatoonVodsClamBlitz.mp4"
    },
    {
        video_id: "ZxxHfPM7NT8",
        title: "Tower Control",
        player: "Player",
        social_link: "https://example.com",
        tags: ["tower control", "advanced"],
        url: "/SplatoonVodsTowerControl.mp4"
    },
    {
        video_id: "X7btgU9U9io",
        title: "New Script Test",
        player: "Typos",
        social_link: "",
        tags: ['splatoon', 'scrim', 'div1'],
        url: "/2025-05-12 22-16-15.mp4"
    },
    {
        video_id: "ZxxHfPM7NT8",
        title: "Splat Zones",
        player: "Player",
        social_link: "https://example.com",
        tags: ["splat zones", "expert"],
        url: "/SplatoonVodsSplatZones.mp4"
    },
    {
        video_id: "ZxxHfPM7NT8",
        title: "Rainmaker",
        player: "Player",
        social_link: "https://example.com",
        tags: ["rainmaker", "intermediate"],
        url: "/SplatoonVodsRainmaker.mp4"
    },
    {
        video_id: "ZxxHfPM7NT8",
        title: "Turf War",
        player: "Player",
        social_link: "https://example.com",
        tags: ["turf war", "beginner"],
        url: "/SplatoonVodsTurfWar.mp4"
    },
    {
        video_id: "ZxxHfPM7NT8",
        title: "Salmon Run Sprint",
        player: "Player",
        social_link: "https://example.com",
        tags: ["salmon run", "co-op"],
        url: "/SplatoonVodsSalmonRun.mp4"
    },
    {
        video_id: "ZxxHfPM7NT8",
        title: "Octo Expansion Quest",
        player: "Player",
        social_link: "https://example.com",
        tags: ["octo expansion", "campaign"],
        url: "/SplatoonVodsOctoExpansion.mp4"
    },
    {
        video_id: "ZxxHfPM7NT8",
        title: "Hero Mode Mission",
        player: "Player",
        social_link: "https://example.com",
        tags: ["hero mode", "story"],
        url: "/SplatoonVodsHeroMode.mp4"
    },
    {
        video_id: "ZxxHfPM7NT8",
        title: "Salmon Run Goldie",
        player: "Player",
        social_link: "https://example.com",
        tags: ["salmon run", "co-op", "goldie"],
        url: "/SplatoonVodsSalmonRunGoldie.mp4"
    },
    {
        video_id: "ZxxHfPM7NT8",
        title: "Turf War Frenzy",
        player: "Player",
        social_link: "https://example.com",
        tags: ["turf war", "frenzy"],
        url: "/SplatoonVodsTurfWarFrenzy.mp4"
    },
    {
        video_id: "ZxxHfPM7NT8",
        title: "Splat Zones Blitz",
        player: "Player",
        social_link: "https://example.com",
        tags: ["splat zones", "blitz"],
        url: "/SplatoonVodsSplatZonesBlitz.mp4"
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
