import React, { Component, Fragment } from "react";
import "emoji-mart/css/emoji-mart.css";
import { Picker, Emoji } from "emoji-mart";

import '../App.css';

const customReactionEmojis = [
  {
    name: "+1",
    short_names: ["+1"],
    text: "",
    emoticons: [],
    keywords: ["thumbsup"]
  },
  {
    name: "hearts",
    short_names: ["hearts"],
    text: "",
    emoticons: [],
    keywords: ["hearts"]
  },
  {
    name: "the_horns",
    short_names: ["the_horns"],
    text: "",
    emoticons: [],
    keywords: ["sign_of_the_horns"]
  },
  {
    name: "zap",
    short_names: ["zap"],
    text: "",
    emoticons: [],
    keywords: ["zap", "high voltage sign"]
  },
  {
    name: "poop",
    short_names: ["poop"],
    text: "",
    emoticons: [],
    keywords: ["poop"]
  }
];

class Reactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEmojis: [],
      reactionShown: false
    };
  }

  onReactionClick = () => {
    this.setState({
      reactionShown: !this.state.reactionShown
    });
  };

  handleEmojiSelect = emoji => {
    console.log(emoji);
    let isEmojiAlreadyFound = false;
    let emojiObjectWithReactionCount = { ...emoji, reaction_count: 1 };
    let newSelectedEmojis = this.state.selectedEmojis.map(emojiObject => {
      if (emojiObject.id === emoji.id) {
        isEmojiAlreadyFound = true;
        return {
          ...emojiObject,
          reaction_count: emojiObject.reaction_count + 1
        };
      }
      return emojiObject;
    });
    if (isEmojiAlreadyFound) {
      this.setState({
        selectedEmojis: newSelectedEmojis,
        reactionShown: false
      });
    } else {
      this.setState({
        selectedEmojis: [...newSelectedEmojis, emojiObjectWithReactionCount],
        reactionShown: false
      });
    }
  };

  render() {
    console.log(this.state.selectedEmojis);
    return (
      <div className="reactions">
        <span>
          <div className="reactions-counter">
            {this.state.selectedEmojis.map(emoji => {
              return (
                <Fragment key={emoji.id}>
                  <div id={`${emoji.id}`} tabIndex="0">
                    <div>
                      {" "}
                      <Emoji emoji={emoji} size={22} />{" "}
                    </div>
                    <span>{emoji.reaction_count}</span>
                  </div>
                </Fragment>
              );
            })}
            <div tabIndex="0" onClick={this.onReactionClick}>😀
            <span className="reaction__counter-value">+</span>
            </div>
            <br/>
            {this.state.reactionShown && (
              <span>
                <Picker
                  style={{ position: "absolute" }}
                  perLine={5}
                  showPreview={false}
                  showSkinTones={false}
                  onSelect={this.handleEmojiSelect}
                  include={["custom"]}
                  custom={customReactionEmojis}
                />
              </span>
            )}
          </div>
        </span>
      </div>
    );
  }
}


export default Reactions;
