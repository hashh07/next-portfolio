import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import Fade from "react-reveal";
import ReactMarkdown from "react-markdown";
import { data, styles } from "./data";

function VerticalExp(props) {
  const { timelineLineColor, accentColor, color } = props.theme;

  return (
    <div className="section-content-container">
      <Timeline lineColor={timelineLineColor}>
        {data.map((item) => (
          <Fade>
            <TimelineItem
              key={item.title + item.dateText}
              dateText={item.dateText}
              dateInnerStyle={{ background: accentColor }}
              style={styles.itemStyle}
              bodyContainerStyle={{ color }}
            >
              <h2 className="item-title">{item.title}</h2>
              <div style={styles.subtitleContainerStyle}>
                <h4 style={{ ...styles.subtitleStyle, color: accentColor }}>
                  {item.subtitle}
                </h4>
                {item.workType && (
                  <h5 style={styles.inlineChild}>&nbsp;· {item.workType}</h5>
                )}
              </div>
              <ul style={styles.ulStyle}>
                {item.workDescription.map((point) => (
                  <div key={point}>
                    <li>
                      <ReactMarkdown
                        children={point}
                        components={{
                          p: "span",
                        }}
                      />
                    </li>
                    <br />
                  </div>
                ))}
              </ul>
            </TimelineItem>
          </Fade>
        ))}
      </Timeline>
    </div>
  );
}

export default VerticalExp;
