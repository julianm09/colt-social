export const extractChannelId = (url: string): string | null => {
  const channelRegex = /youtube\.com\/channel\/([a-zA-Z0-9_-]+)/;
  const userRegex = /youtube\.com\/user\/([a-zA-Z0-9_-]+)/;
  const customRegex = /youtube\.com\/c\/([a-zA-Z0-9_-]+)/;
  const handleRegex = /youtube\.com\/@([a-zA-Z0-9_-]+)/;

  let match = url.match(channelRegex);
  if (match) {
    return match[1];
  }

  match = url.match(userRegex);
  if (match) {
    return match[1]; // This needs API call to get channel ID
  }

  match = url.match(customRegex);
  if (match) {
    return match[1]; // This needs API call to get channel ID
  }

  match = url.match(handleRegex);
  if (match) {
    return match[1]; // This needs API call to get channel ID
  }

  return null;
};
