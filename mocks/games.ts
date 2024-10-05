import type { ApiResponse, GameCategory, Game } from '@/types/game'

const mockUpcomingGames: Game[] = [
    {
        "id": 29,
        "title": "AG băng hình",
        "subtitle": "",
        "web_pic": "https://cms.t79.bet/storage/uploads/api_game/202203/18/api_game_1647579161_v6bjb8YNFJ.png",
        "web_logo": "https://cms.t79.bet/storage/uploads/api_game/202203/18/api_game_1647579141_NuduAmHssd.png",
        "mobile_pic": "https://cms.t79.bet/storage/uploads/api_game/202104/28/api_game_1619620604_sz8DsjaDUM.png",
        "logo_url": "https://cms.t79.bet/storage/uploads/logo/202203/17/logo_1647487084_fxXNTlBJn2.png",
        "api_name": "AG4",
        "class_name": "ag",
        "game_type": 1,
        "params": "{\"gameCode\":\"0\",\"gameType\":1}",
        "is_open": 1,
        "weight": 11,
        "client_type": 0,
        "tags": "hot",
        "remark": "",
        "lang_json": "{\"zh_cn\":\"AG视讯\",\"zh_hk\":\"AG視訊\",\"en\":\"AG Live\",\"th\":\"AG วีดีโอ\",\"vi\":\"AG băng hình\"}",
        "lang": "vi",
        "created_at": "2022-03-17 11:01:33",
        "updated_at": "2024-01-22 17:43:15",
        "icon_url": "https://cms.t79.bet/storage/uploads/icon/202409/13/icon_1726204038_2DNpbnDNhH.png"
    },
    {
        "id": 109,
        "title": "Yibo",
        "subtitle": "",
        "web_pic": "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        "web_logo": "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652272_EYkPN8Zdrt.png",
        "mobile_pic": "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652281_PtvcH9DaUc.png",
        "logo_url": "https://cms.t79.bet/storage/uploads/logo/202203/19/logo_1647652293_1xzbg86n99.png",
        "api_name": "YB4",
        "class_name": "yb",
        "game_type": 1,
        "params": "{\"gameCode\":\"0\",\"gameType\":1}",
        "is_open": 1,
        "weight": 10,
        "client_type": 0,
        "tags": "hot",
        "remark": "",
        "lang_json": "{\"zh_cn\":\"亿博视讯\",\"zh_hk\":\"億博視訊\",\"en\":\"Yibo\",\"th\":\"วิดีโอ Yibo\",\"vi\":\"Yibo\"}",
        "lang": "vi",
        "created_at": "2022-03-18 21:52:26",
        "updated_at": "2024-01-22 17:43:15",
        "icon_url": "https://cms.t79.bet/storage/uploads/icon/202203/18/yb.png"
    },
    {
        "id": 384,
        "title": "EVO băng hình",
        "subtitle": "",
        "web_pic": "https://cms.t79.bet/storage/uploads/api_game/202203/29/api_game_1648557341_fVhdwedZLj.png",
        "web_logo": "https://cms.t79.bet/storage/uploads/api_game/202203/29/api_game_1648557396_OZRtztXjZ0.png",
        "mobile_pic": "https://cms.t79.bet/storage/uploads/api_game/202203/29/api_game_1648557391_NIBs8Dit4x.png",
        "logo_url": "https://cms.t79.bet/storage/uploads/logo/202203/29/logo_1648557387_GPS9IIn9Kp.png",
        "api_name": "EVO4",
        "class_name": "evo",
        "game_type": 1,
        "params": "{\"gameCode\":\"0\",\"gameType\":1}",
        "is_open": 1,
        "weight": 10,
        "client_type": 0,
        "tags": "hot",
        "remark": "",
        "lang_json": "{\"zh_cn\":\"EVO视讯\",\"zh_hk\":\"EVO視訊\",\"en\":\"EVO Video\",\"th\":\"EVO วีดีโอ\",\"vi\":\"EVO băng hình\"}",
        "lang": "vi",
        "created_at": "2022-03-18 21:52:26",
        "updated_at": "2024-01-22 17:43:17",
        "icon_url": ""
    },
    {
        "id": 114,
        "title": "DG băng hình",
        "subtitle": "",
        "web_pic": "https://cms.t79.bet/storage/uploads/api_game/202203/20/api_game_1647711624_dTKTx49SLB.png",
        "web_logo": "https://cms.t79.bet/storage/uploads/api_game/202106/03/api_game_1622705028_B2gdK4JPvu.png",
        "mobile_pic": "https://cms.t79.bet/storage/uploads/api_game/202106/04/api_game_1622777851_CwKUz960c9.png",
        "logo_url": "https://cms.t79.bet/storage/uploads/api_game/202106/03/api_game_1622705028_B2gdK4JPvu.png",
        "api_name": "DG4",
        "class_name": "dg",
        "game_type": 1,
        "params": "{\"gameCode\":\"0\",\"gameType\":1}",
        "is_open": 1,
        "weight": 10,
        "client_type": 0,
        "tags": "hot",
        "remark": "",
        "lang_json": "{\"zh_cn\":\"DG视讯\",\"zh_hk\":\"DG視訊\",\"en\":\"DG Video\",\"th\":\"DG วีดีโอ\",\"vi\":\"DG băng hình\"}",
        "lang": "vi",
        "created_at": "2022-03-18 21:52:26",
        "updated_at": "2024-01-22 17:43:16",
        "icon_url": ""
    },
    {
        "id": 389,
        "title": "SEXY băng hình",
        "subtitle": "",
        "web_pic": "https://cms.t79.bet/storage/uploads/api_game/202203/29/api_game_1648558049_tmcwYawpzT.png",
        "web_logo": "https://cms.t79.bet/storage/uploads/api_game/202203/29/api_game_1648558053_dSJH7fFWTK.png",
        "mobile_pic": "https://cms.t79.bet/storage/uploads/api_game/202203/29/api_game_1648558045_QbxuHlnf0c.png",
        "logo_url": "https://cms.t79.bet/storage/uploads/logo/202203/29/logo_1648558058_mtl1PMu3qh.png",
        "api_name": "SEXY4",
        "class_name": "sexy",
        "game_type": 1,
        "params": "{\"gameCode\":\"0\",\"gameType\":1}",
        "is_open": 1,
        "weight": 10,
        "client_type": 0,
        "tags": "hot",
        "remark": "",
        "lang_json": "{\"zh_cn\":\"SEXY视讯\",\"zh_hk\":\"SEXY視訊\",\"en\":\"SEXY Video\",\"th\":\"SEXY วีดีโอ\",\"vi\":\"SEXY băng hình\"}",
        "lang": "vi",
        "created_at": "2022-03-18 21:52:26",
        "updated_at": "2024-01-22 17:43:18",
        "icon_url": ""
    },
    {
        "id": 119,
        "title": "video hoàn hảo",
        "subtitle": "",
        "web_pic": "https://cms.t79.bet/storage/uploads/api_game/202203/20/api_game_1647741288_Ami5o8avLJ.png",
        "web_logo": "https://cms.t79.bet/storage/uploads/api_game/202203/20/api_game_1647741385_zjEIa48rXX.png",
        "mobile_pic": "https://cms.t79.bet/storage/uploads/api_game/202203/20/api_game_1647740509_vXkmdRQE7X.png",
        "logo_url": "https://cms.t79.bet/storage/uploads/logo/202203/20/logo_1647740519_rdmTVmPrhX.png",
        "api_name": "WM4",
        "class_name": "wm",
        "game_type": 1,
        "params": "{\"gameCode\":\"0\",\"gameType\":1}",
        "is_open": 1,
        "weight": 10,
        "client_type": 0,
        "tags": "hot",
        "remark": "",
        "lang_json": "{\"zh_cn\":\"完美视讯\",\"zh_hk\":\"完美視訊\",\"en\":\"perfect video\",\"th\":\"วิดีโอที่สมบูรณ์แบบ\",\"vi\":\"video hoàn hảo\"}",
        "lang": "vi",
        "created_at": "2022-03-18 21:52:26",
        "updated_at": "2024-01-22 17:43:16",
        "icon_url": ""
    },
    {
        "id": 124,
        "title": "XG Video",
        "subtitle": "",
        "web_pic": "https://cms.t79.bet/storage/uploads/api_game/202203/20/api_game_1647741838_UreDFhJOBE.png",
        "web_logo": "https://cms.t79.bet/storage/uploads/api_game/202203/20/api_game_1647741828_46eU1BsRNd.png",
        "mobile_pic": "https://cms.t79.bet/storage/uploads/api_game/202203/20/api_game_1647741882_fHOxMqSkn0.png",
        "logo_url": "https://cms.t79.bet/storage/uploads/logo/202203/20/logo_1647741799_JEnFlxzyFH.png",
        "api_name": "XGLIVE4",
        "class_name": "xg",
        "game_type": 1,
        "params": "{\"gameCode\":\"0\",\"gameType\":1}",
        "is_open": 1,
        "weight": 10,
        "client_type": 0,
        "tags": "hot",
        "remark": "",
        "lang_json": "{\"zh_cn\":\"XG视讯\",\"zh_hk\":\"XG視訊\",\"en\":\"XG Video\",\"th\":\"XG วิดีโอ\",\"vi\":\"XG Video\"}",
        "lang": "vi",
        "created_at": "2022-03-18 21:52:26",
        "updated_at": "2024-01-22 17:43:16",
        "icon_url": ""
    },
    {
        "id": 104,
        "title": "Ober",
        "subtitle": "",
        "web_pic": "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647651181_7ocvlCrih8.png",
        "web_logo": "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647651250_wCFZ09ZMvU.png",
        "mobile_pic": "https://cms.t79.bet/storage/uploads/api_game/202106/04/api_game_1622777164_i3oyi2uZrH.png",
        "logo_url": "https://cms.t79.bet/storage/uploads/logo/202203/19/logo_1647651313_zYxXc3IuRV.png",
        "api_name": "AB4",
        "class_name": "ab",
        "game_type": 1,
        "params": "{\"gameCode\":\"0\",\"gameType\":1}",
        "is_open": 1,
        "weight": 10,
        "client_type": 0,
        "tags": "hot",
        "remark": "",
        "lang_json": "{\"zh_cn\":\"欧博视讯\",\"zh_hk\":\"歐博\",\"en\":\"Ober\",\"th\":\"Ober\",\"vi\":\"Ober\"}",
        "lang": "vi",
        "created_at": "2022-03-18 21:52:26",
        "updated_at": "2024-01-22 17:43:15",
        "icon_url": "https://cms.t79.bet/storage/uploads/icon/202203/18/ab.png"
    },
    {
        "id": 129,
        "title": "BG Sòng Bạc",
        "subtitle": "",
        "web_pic": "https://cms.t79.bet/storage/uploads/api_game/202203/20/api_game_1647742614_Q1ILH8FiWb.png",
        "web_logo": "https://cms.t79.bet/storage/uploads/api_game/202203/20/api_game_1647742597_bI3TPO0FNZ.png",
        "mobile_pic": "https://cms.t79.bet/storage/uploads/api_game/202106/04/api_game_1622777637_uZORKhAWTl.png",
        "logo_url": "https://cms.t79.bet/storage/uploads/logo/202106/20/logo_1624168705_Mzh7CtjukE.png",
        "api_name": "BG4",
        "class_name": "bg",
        "game_type": 1,
        "params": "{\"gameCode\":\"0\",\"gameType\":1}",
        "is_open": 1,
        "weight": 10,
        "client_type": 0,
        "tags": "hot",
        "remark": "",
        "lang_json": "{\"zh_cn\":\"BG视讯\",\"zh_hk\":\"BG視訊\",\"en\":\"BG Video\",\"th\":\"BG บาคาร่า\",\"vi\":\"BG Sòng Bạc\"}",
        "lang": "vi",
        "created_at": "2022-03-18 21:52:26",
        "updated_at": "2024-01-22 17:43:16",
        "icon_url": ""
    },
    {
        "id": 39,
        "title": "BBIN Flagship Hall",
        "subtitle": "",
        "web_pic": "https://cms.t79.bet/storage/uploads/api_game/202203/18/api_game_1647579205_eILKOIQ2fk.png",
        "web_logo": "https://cms.t79.bet/storage/uploads/api_game/202203/18/api_game_1647579245_84VqZJaDPR.png",
        "mobile_pic": "https://cms.t79.bet/storage/uploads/api_game/202106/05/api_game_1622852636_UfT7SyoMhJ.png",
        "logo_url": "https://cms.t79.bet/storage/uploads/logo/202106/22/logo_1624375522_J7SWHnlJDZ.png",
        "api_name": "BBIN4",
        "class_name": "bb",
        "game_type": 1,
        "params": "{\"gameCode\":\"0\",\"gameType\":1}",
        "is_open": 1,
        "weight": 10,
        "client_type": 0,
        "tags": "hot",
        "remark": "",
        "lang_json": "{\"zh_cn\":\"BBIN旗舰厅\",\"zh_hk\":\"BBIN旗艦廳\",\"en\":\"BBIN Flagship Hall\",\"th\":\"BBIN แฟล็กชิปฮอลล์\",\"vi\":\"BBIN Flagship Hall\"}",
        "lang": "vi",
        "created_at": "2022-03-17 15:27:22",
        "updated_at": "2024-01-22 17:43:15",
        "icon_url": "https://cms.t79.bet/storage/uploads/icon/202106/20/icon_1624169612_aYEb1jtJyl.png"
    }
]

const mockFeaturedGames: Game[] = [
    {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
    },
]

const mockApiResponse: ApiResponse = {
    status: "success",
    code: 200,
    message: "",
    data: [
        {
            api_title: "AG亚游",
            api_name: "AG",
            tags: "mothuong",
            list: mockUpcomingGames
        },
        {
            api_title: "AG亚游",
            api_name: "AG",
            tags: "noibat",
            list: mockFeaturedGames
        }
    ]
}

export const getMockGames = (): ApiResponse => {
    return mockApiResponse
}

export const getUpcomingGames = (): Game[] => {
    const upcomingCategory = mockApiResponse.data.find(cat => cat.tags === "mothuong")
    return upcomingCategory ? upcomingCategory.list : []
}

export const getFeaturedGames = (): Game[] => {
    const featuredCategory = mockApiResponse.data.find(cat => cat.tags === "noibat")
    return featuredCategory ? featuredCategory.list : []
}
