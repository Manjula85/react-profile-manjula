import React, { useState } from "react";
import { Card, Image } from "semantic-ui-react";

const ProjectList = () => {
  const [photos] = useState([
    {
      name: "dog_dash",
      category: "portfolio",
      link: "https://dog-dash.herokuapp.com/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tempor luctus. Integer volutpat, tortor.",
    },
    {
      name: "coders_bay",
      category: "portfolio",
      link: "https://the-coders-bay-app.herokuapp.com/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tempor luctus. Integer volutpat, tortor.",
    },
    {
      name: "covid_positivity",
      category: "portfolio",
      link: "https://uot-project1-group07.github.io/project1-group07/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tempor luctus. Integer volutpat, tortor.",
    },
    {
      name: "nosql",
      category: "portfolio",
      link: "https://github.com/Manjula85/social-media-Manjula",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tempor luctus. Integer volutpat, tortor.",
    },
    {
      name: "note_taker",
      category: "portfolio",
      link: "https://manjula85.github.io/NoteTaker-Manjula/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tempor luctus. Integer volutpat, tortor.",
    },
    {
      name: "orm_mapping",
      category: "portfolio",
      link: "https://github.com/Manjula85/e-commerce-Manjula",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tempor luctus. Integer volutpat, tortor.",
    },
    {
      name: "timed_quiz",
      category: "portfolio",
      link: "https://manjula85.github.io/timed-quiz-Manjula/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tempor luctus. Integer volutpat, tortor.",
    },
  ]);

  return (
    <div>
      {photos.length ? (
        <section className="ui three cards">
          {photos.map((image) => (
              <div className="ui fluid card">
                <a href={image.link} target="_blank" rel="noreferrer">
                  <div className="image">
                    <img
                      src={
                        require(`../../assets/portfolio/${image.name}.PNG`)
                          .default
                      }
                      alt={image.name}
                      key={image.name}
                    />
                    <h4 style={{color: '#a3a3c2'}}>{image.name}</h4>
                  </div>
                </a>
              </div>
          ))}
        </section>
      ) : (
        <h3>No posts</h3>
      )}
    </div>
  );
};
export default ProjectList;
