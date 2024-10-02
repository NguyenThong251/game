export interface Game {
    id: number;
    api_name: string;
    name: string;
    en_name: string;
    game_type: number;
    game_code: string;
    img_url: string;
    client_type: string;
    platform: string | null;
    param_remark: string;
    is_open: string;
    weight: string;
    tags: string;
    created_at: string;
    updated_at: string;
}

export interface GameCategory {
    api_title: string;
    api_name: string;
    tags: string;
    list: Game[];
}

export interface ApiResponse {
    status: string;
    code: number;
    message: string;
    data: GameCategory[];
}