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
    name: "clap",
    short_names: ["clap"],
    text: "",
    emoticons: [],
    keywords: ["clap"]
  },
  {
    name: "raised_hands",
    short_names: ["raised_hands"],
    text: "",
    emoticons: [],
    keywords: ["raised_hands"]
  },
  {
    name: "handshake",
    short_names: ["handshake"],
    text: "",
    emoticons: [],
    keywords: ["handshake"]
  },
  {
    name: "grinning_face_with_star_eyes",
    short_names: ["grinning_face_with_star_eyes"],
    text: "",
    emoticons: [],
    keywords: ["grinning_face_with_star_eyes"]
  },
  {
    name: "hearts",
    short_names: ["hearts"],
    text: "",
    emoticons: [],
    keywords: ["hearts"]
  },
  {
    name: "trophy",
    short_names: ["trophy"],
    text: "",
    emoticons: [],
    keywords: ["trophy"]
  },
  {
    name: "medal",
    short_names: ["medal"],
    text: "",
    emoticons: [],
    keywords: ["medal"]
  },
  {
    name: "mega",
    short_names: ["mega"],
    text: "",
    emoticons: [],
    keywords: ["mega", "cheering megaphone"]
  },
  {
    name: "zap",
    short_names: ["zap"],
    text: "",
    emoticons: [],
    keywords: ["zap", "high voltage sign"]
  },
  {
    name: "tada",
    short_names: ["tada"],
    text: "",
    emoticons: [],
    keywords: ["tada", "party popper"]
  },
  {
    name: "confetti_ball",
    short_names: ["confetti_ball"],
    text: "",
    emoticons: [],
    keywords: ["confetti_ball"]
  },
  {
    name: "rocket",
    short_names: ["rocket"],
    text: "",
    emoticons: [],
    keywords: ["rocket"]
  },
  {
    name: "fire",
    short_names: ["fire"],
    text: "",
    emoticons: [],
    keywords: ["fire"]
  },
  {
    name: "hammer_and_wrench",
    short_names: ["hammer_and_wrench"],
    text: "",
    emoticons: [],
    keywords: ["hammer_and_wrench"]
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
        selectedEmojis: newSelectedEmojis
      });
    } else {
      this.setState({
        selectedEmojis: [...newSelectedEmojis, emojiObjectWithReactionCount]
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
            <div tabIndex="0" onClick={this.onReactionClick}>
            <span className="reaction__counter-value" role="img" aria-label="smiley">😀+</span>
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
