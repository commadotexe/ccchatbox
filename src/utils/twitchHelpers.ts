export const getUserByLogin = (login: string) => {
    const USERS = 'https://api.twitch.tv/helix/users';
    return fetch(`${USERS}?login=${login}`, {
        headers: {
            Authorization: 'Bearer ea46285ph1uwmduffju62una0pnb2o',
            'Client-Id': 'gp762nuuoqcoxypju8c569th9wz7q5',
        }
    })
    .then(response => response.json())
    .then(response => response.data[0]);
};

export const getGlobalBadges = () => {
    const GLOBAL_BADGES = 'https://badges.twitch.tv/v1/badges/global/display';
    return fetch(GLOBAL_BADGES)
    .then(response => response.json())
    .then(response => response['badge_sets']);
}

export const getChannelBadges = (channelId: string) => {
    const USER_BADGES = 'https://badges.twitch.tv/v1/badges/channels/CHANNEL_ID/display';
    return fetch(USER_BADGES.replace('CHANNEL_ID', channelId))
    .then(response => response.json())
    .then(response => response['badge_sets']);
}