export type SoundcloudTrack = {
    artwork_url: string
    caption?: string
    commentable: boolean
    comment_count: number
    created_at: string
    description?: string
    download_count: number
    duration: number
    full_duration: number
    embeddable_by: string
    genre?: string
    has_downloads_left: boolean
    id: number
    kind: string
    label_name?: string
    last_modified: string
    license: string
    likes_count: number
    permalink: string
    permalink_url: string
    playback_count: number
    public: boolean
    publisher_metadata?: {
        id: number
        urn: string
        artist: string
        album_title: string
        contains_music: boolean
        upc_or_ean: string
        isrc: string
        explicit: boolean
        p_line: string
        p_line_for_display: string
        c_line: string
        c_line_for_display: string
        release_title: string
    }
    purchase_title?: string
    purchase_url?: string
    release_date?: string
    reposts_count: number
    secret_token?: string
    sharing: string
    state: string
    streamable: boolean
    tag_list: string
    title: string
    track_format: string
    uri: string
    urn: string
    user_id: number
    visuals?: any
    waveform_url: string
    display_date: string
    media: {
        transcodings: {
            url: string
            preset: string
            duration: number
            snipped: boolean
            format: {
                protocol: string
                mime_type: string
            }
            quality: string
        }[]
    }
    station_urn?: string
    station_permalink?: string
    track_authorization?: string
    monetization_model?: string
    policy?: string
    user: {
        avatar_url: string
        first_name: string
        followers_count: number
        full_name: string
        id: number
        kind: string
        last_modified: string
        last_name: string
        permalink: string
        permalink_url: string
        uri: string
        urn: string
        username: string
        verified: boolean
        city?: string
        country_code?: string
        badges: {
            pro: boolean
            pro_unlimited: boolean
            verified: boolean
        }
        station_urn?: string
        station_permalink?: string
    }
}

export type HomepageResponse = {
    collection: SoundcloudTrack[]
    kind: string
    next_href: string
    query_urn: string
    genre: string
}

export type HomeContext = {
    page: number
    page_size: number
    getter?: (
        context: HomeContext & { url: string; id: number | null }
    ) => Pager
}

export type SearchContext = {
    q: string
    page: number
    page_size: number
    kind: string
    get_all: boolean
}

export type ChannelVideoPagerContext = {
    id?: number
    url: string
    page_size: number
    offset_date?: string
}

export type SoundcloudPlaylist = {
    artwork_url: string
    created_at: string
    duration: number
    id: number
    kind: string
    last_modified: string
    likes_count: number
    managed_by_feeds: boolean
    permalink: string
    permalink_url: string
    public: boolean
    reposts_count: number
    secret_token?: string
    sharing: string
    title: string
    track_count: number
    uri: string
    user_id: number
    set_type: string
    is_album: boolean
    published_at: string
    display_date: string
    user: SoundcloudUser
}

export type SoundcloudSystemPlaylist = {
    urn: string
    query_urn?: string
    permalink: string
    permalink_url: string
    title: string
    description: string
    short_title: string
    short_description: string
    tracking_feature_name: string
    playlist_type: string
    last_updated: string
    artwork_url: string
    calculated_artwork_url: string
    likes_count: number
    seed?: string
    tracks: {
        id: number
        kind: string
        monetization_model?: string
    }[]
    is_public: boolean
    made_for: {
        urn: string
        permalink: string
        permalink_url: string
        username: string
        avatar_url: string
        kind: string
        uri: string
        last_updated: string
    }
    user: SoundcloudUser
    kind: string
    id: string
}

export type PlaylistWrapper = {
    created_at: string
    type: "playlist-like" | "system-playlist-like" | "playlist"
    user: SoundcloudUser
    uuid: string
    caption?: string
    playlist?: SoundcloudPlaylist
    system_playlist?: SoundcloudSystemPlaylist
}

export type SoundcloudAlbum = {
    artwork_url: string
}

export type SearchResponse<CollectionType> = {
    collection: CollectionType[]
    next_href: string
    query_urn: string
    total_results: number
}

export type AnySearchResponse = SearchResponse<
    SoundcloudAlbum | SoundcloudPlaylist | SoundcloudTrack | SoundcloudUser
>

export type SearchAutofillResponse = {
    collection: {
        query: string
        output: string
    }[]
    next_href?: string
    query_urn?: string
}

export type SCHydration = {
    hydratable: string
    data:
        | string
        | {
              [key: string]: any
          }
}

export type SoundcloudUser = {
    avatar_url: string
    city?: string
    comments_count: number
    country_code?: string
    created_at: string
    creator_subscriptions: {
        product: {
            id: string
        }
    }[]
    creator_subscription: {
        product: {
            id: string
        }
    }
    description: string
    followers_count: number
    followings_count: number
    first_name: string
    full_name: string
    groups_count: number
    id: number
    kind: string
    last_modified: string
    last_name: string
    likes_count: number
    playlist_likes_count: number
    permalink: string
    permalink_url: string
    playlist_count: number
    reposts_count: number
    track_count: number
    uri: string
    urn: string
    username: string
    verified: boolean
    visuals: {
        urn: string
        enabled: boolean
        visuals: {
            urn: string
            entry_time: number
            visual_url: string
            link: string
        }[]
        tracking: any
    }
    badges: {
        pro: boolean
        pro_unlimited: boolean
        verified: boolean
    }
    station_urn: string
    station_permalink: string
    url: string
}

export type SoundcloudStream = {
    next_href: string
    query_urn: string
    collection: {
        created_at: string
        type: string
        user: SoundcloudUser
        track: SoundcloudTrack
        uuid: string
        caption?: string
    }[]
}

export type SoundcloudComment = {
    kind: string
    id: number
    body: string
    created_at: string
    timestamp: number
    user_id: number
    track_id: number
    self: {
        urn: string
    }
    user: SoundcloudUser
}

export type CommentResponse = {
    collection: SoundcloudComment[]
    next_href: string
    query_urn: string
}
