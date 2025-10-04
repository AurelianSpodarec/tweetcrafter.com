export interface IXUser {
  id: number;
  id_str: string;
  name: string;
  screen_name: string;
  location: string | null;
  profile_location: {
    id: string;
    url: string;
    place_type: string;
    name: string;
    full_name: string;
    country_code: string;
    country: string;
    contained_within: any[]
    bounding_box: null | any
    attributes: Record<string, unknown>
  } | null
  description: string | null;
  url: null | string;
  birthdate?: {
    day: number,
    month: number,
    year: number,
    visibility?: "public" | "private"
  }
  entities?: {
    url?: {
      urls: {
        url: string;
        expanded_url: string;
        display_url: string;
        indices: [number, number];
      }[];
    };
    description?: {
      hashtags: string[];
      symbols: string[];
      user_mentions: string[];
      urls: {
        url: string;
        expanded_url: string;
        display_url: string;
        indices: [number, number];
      }[];
    };
  };
  protected: boolean;
  followers_count: number;
  fast_followers_count: number;
  normal_followers_count: number;
  friends_count: number;
  listed_count: number;
  created_at: string;
  favourites_count: number;
  utc_offset: null | number;
  time_zone: null | string;
  geo_enabled: boolean;
  verified: boolean;
  statuses_count: number;
  media_count: number;
  lang: null | string;
  contributors_enabled: boolean;
  is_translator: boolean;
  is_translation_enabled: boolean;
  profile_background_color: string;
  profile_background_image_url: string | null;
  profile_background_image_url_https: string | null;
  profile_background_tile: boolean;
  profile_image_url: string;
  profile_image_url_https: string;
  profile_banner_url: string;
  profile_link_color: string;
  profile_sidebar_border_color: string;
  profile_sidebar_fill_color: string;
  profile_text_color: string;
  profile_use_background_image: boolean;
  default_profile: boolean;
  default_profile_image: boolean;
  pinned_tweet_ids: number[];
  pinned_tweet_ids_str: string[];
  has_custom_timelines: boolean;
  can_dm: boolean;
  can_media_tag: boolean;
  following: boolean;
  follow_request_sent: boolean;
  notifications: boolean;
  muting: boolean;
  blocking: boolean;
  blocked_by: boolean;
  want_retweets: boolean;
  advertiser_account_type: string;
  advertiser_account_service_levels: string[];
  analytics_type: string;
  profile_interstitial_type: string;
  business_profile_state: string;
  translator_type: string;
  withheld_in_countries: string[];
  followed_by: boolean;
  ext_highlighted_label?: {
    label?: {
      description: string;
      badge: {
        url: string;
      };
      url: {
        url_type: string;
        url: string;
      };
      user_label_type: string;
      user_label_display_type: string;
    };
  };
  ext_verified_type?: "Government" | "Business";
  ext_is_blue_verified: boolean;
  require_some_consent: boolean;
}
