import axios from 'axios';

const API_KEY = 'AIzaSyDLyal8s__Rfa9CgWfD5r-CvWLxMJba0Hk';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const getChannelAnalytics = async (channelId: string) => {
  const response = await axios.get(`${BASE_URL}/channels`, {
    params: {
      part: 'snippet,statistics,contentDetails,brandingSettings',
      id: channelId,
      key: API_KEY,
    },
  });
  return response.data;
};

export const getVideoAnalytics = async (videoId: string) => {
  const response = await axios.get(`${BASE_URL}/videos`, {
    params: {
      part: 'snippet,statistics',
      id: videoId,
      key: API_KEY,
    },
  });
  return response.data;
};

export const getChannelIdByUsername = async (username: string) => {
  const response = await axios.get(`${BASE_URL}/channels`, {
    params: {
      part: 'id',
      forUsername: username,
      key: API_KEY,
    },
  });
  return response.data.items[0].id;
};

export const getChannelIdByCustomUrl = async (customUrl: string) => {
  const response = await axios.get(`${BASE_URL}/search`, {
    params: {
      part: 'snippet',
      q: customUrl,
      type: 'channel',
      key: API_KEY,
    },
  });
  return response.data.items[0].id.channelId;
};
