import React from 'react';

const SKIP_TAGS = ['inprogress'];

export function mergeText(text, entities) {
  if ((entities.urls && entities.urls.length === 0) && (entities.media && entities.media.length === 0)) {
    return text;
  }

  let _text = text;

  if (!_text) {
    return _text;
  }

  if (entities.media) {
    entities.media.forEach(u => {
      _text = _text.replace(u.url, '');
    });
  }

  entities.urls.forEach(u => {
    _text = _text.replace(u.url, `<a href="${u.url}" target="_blank">${u.display_url}</a>`);
  });

  entities.hashtags.forEach(h => {
    if (SKIP_TAGS.includes(h.text)) {
      _text = _text.replace(`#${h.text}`, ``);
    } else {
      _text = _text.replace(`#${h.text}`, `<a href="https://twitter.com/hashtag/${h.text}?src=hash" target="_blank">#${h.text}</a>`);
    }
  });

  return _text;
}

const Text = ({ full_text, entities }) => {
  return <span dangerouslySetInnerHTML={{__html: mergeText(full_text, entities) }}/>;
};

export default Text;
