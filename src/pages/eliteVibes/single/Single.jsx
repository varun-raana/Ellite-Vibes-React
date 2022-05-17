import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import SingleVibeSlide from "../../../slides/SingleVibeSlide";

function Single() {
  const { id } = useParams();
  const [event, setEvent] = useState("");
  const isMounted = useRef(true);

  const URL = "https://elite-backend-1.herokuapp.com/api/events/" + id;

  useEffect(() => {
    const showEvent = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      const result = data.data;

      if (res.status === 200 && result) {
        setTimeout(() => {
          setEvent(result);
        }, 1600);
      }
    };

    showEvent();
  }, [id, URL]);

  return (
    <>
      <SingleVibeSlide event={event} />
      {event.name}
    </>
  );
}

export default Single;
