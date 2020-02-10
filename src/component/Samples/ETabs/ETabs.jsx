import React from "react";
import { Tab, Tabs } from "react-bootstrap";

export default function ETabs(props) {
  return (
    <>
      <div className="App">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Home">
            <p>
              Lo! in the orient when the gracious light Lifts up his burning
              head, each under eye Doth homage to his new-appearing sight,
              Serving with looks his sacred majesty; And having climb'd the
              steep-up heavenly hill, Resembling strong youth in his middle age,
              Yet mortal looks adore his beauty still, Attending on his golden
              pilgrimage: But when from highmost pitch, with weary car, Like
              feeble age, he reeleth from the day,
            </p>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <p>
              Lo! in the orient when the gracious light Lifts up his burning
              head, each under eye Doth homage to his new-appearing sight,
              Serving with looks his sacred majesty; And having climb'd the
              steep-up heavenly hill, Resembling strong youth in his middle age,
              Yet mortal looks adore his beauty still, Attending on his golden
              pilgrimage: But when from highmost pitch, with weary car, Like
              feeble age, he reeleth from the day,
            </p>
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
            <p>
              Lo! in the orient when the gracious light Lifts up his burning
              head, each under eye Doth homage to his new-appearing sight,
              Serving with looks his sacred majesty; And having climb'd the
              steep-up heavenly hill, Resembling strong youth in his middle age,
              Yet mortal looks adore his beauty still, Attending on his golden
              pilgrimage: But when from highmost pitch, with weary car, Like
              feeble age, he reeleth from the day,
            </p>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
