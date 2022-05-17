# About Photo Viewer

This app is called Flickr Photo Viewer. It allows users to search for photos uploaded on Flickr, view results as photos and lets users mark photos as favorites, to be viewed later.

The app should also support one more localization (other than the default of `en`): French (`fr`). Translations between English to French can be obtained from Google Translate.

### Flickr API

Flickr is a wonderful image-sharing service that has a publicly accessible and dead-simple API for developers to use.

This project uses the `Flickr API` to search for images. To use the `Flickr API`, you need an API key.

However, for test projects like this, Flickr has a sample key that they rotate out every so often. You can use the key without signing up.

Using this link `http://www.flickr.com/services/api/explore/?method=flickr.photos.search` simply perform any search by checking optional argument `text` and select `Do not sign call?` option, then click on `Call Method` button to copy the API key out of the URL at the bottom – it follows the `“&api_key=””` all the way to the next `“&”`.

For example, if the URL is:

`http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=6593783 efea8e7f6dfc6b70bc03d2afb&format=rest&api_sig=f24f4e98063a9b8ecc8b522b238d5e2f`

then the API key is: `6593783efea8e7f6dfc6b70bc03d2afb`

## Figma Prototype

A Figma prototype has been prepared for you to illustrate how this app works. [You can find it here](https://www.figma.com/file/VXaH4aT8BkiN4lJcbGJz48/Flickr-Photo-Viewer?node-id=0%3A2347).
