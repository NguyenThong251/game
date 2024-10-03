import type { ApiResponse, GameCategory, Game } from '@/types/game'

const mockGames: Game[] = [
    // {
    //     id: 2721,
    //     api_name: "BBIN",
    //     name: "Mô tông giáng thế",
    //     en_name: "",
    //     game_type: 3,
    //     game_code: "5221",
    //     img_url: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
    //     client_type: "0",
    //     platform: null,
    //     param_remark: '{"gameType":"3"}',
    //     is_open: "1",
    //     weight: "1",
    //     tags: "hot,recommend,new",
    //     created_at: "0000-00-00 00:00:00",
    //     updated_at: "0000-00-00 00:00:00"
    // },
    // {
    //     id: 2722,
    //     api_name: "BBIN",
    //     name: "Nguyệt cung mỹ nhân",
    //     en_name: "",
    //     game_type: 3,
    //     game_code: "5227",
    //     img_url: "https://cms.t79.bet/storage/uploads/img/bbin/5227.png",
    //     client_type: "0",
    //     platform: null,
    //     param_remark: '{"gameType":"3"}',
    //     is_open: "1",
    //     weight: "1",
    //     tags: "hot,recommend,new",
    //     created_at: "0000-00-00 00:00:00",
    //     updated_at: "0000-00-00 00:00:00"
    // },
    {
        id: 29,
        title: "AG băng hình",
        subtitle: "",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/18/api_game_1647579161_v6bjb8YNFJ.png",
        web_logo: "https://cms.t79.bet/storage/uploads/api_game/202203/18/api_game_1647579141_NuduAmHssd.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202104/28/api_game_1619620604_sz8DsjaDUM.png",
        logo_url: "https://cms.t79.bet/storage/uploads/logo/202203/17/logo_1647487084_fxXNTlBJn2.png",
        api_name: "AG4",
        class_name: "ag",
        game_type: 1,
        params: "{\"gameCode\":\"0\",\"gameType\":1}",
        is_open: 1,
        weight: 11,
        client_type: 0,
        tags: "hot",
        remark: "",
        lang_json: "{\"zh_cn\":\"AG视讯\",\"zh_hk\":\"AG視訊\",\"en\":\"AG Live\",\"th\":\"AG วีดีโอ\",\"vi\":\"AG băng hình\"}",
        lang: "vi",
        created_at: "2022-03-17 11:01:33",
        updated_at: "2024-01-22 17:43:15",
        icon_url: "https://cms.t79.bet/storage/uploads/icon/202409/13/icon_1726204038_2DNpbnDNhH.png"
      }
      
   
    // Thêm các game khác nếu cần
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
            list: mockGames
        },
        {
            api_title: "AG亚游",
            api_name: "AG",
            tags: "noibat",
            list: mockGames
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
