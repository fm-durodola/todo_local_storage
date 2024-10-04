import {
  dates_container,
  date_style,
} from "@/components/DateTime/DateTime.module.css";

const DateTime = ({ dateCreated, dateCompleted, completed }) => {
  return (
    <div className={dates_container}>
      <span className={date_style}>
        <p>
          <em>
            <strong>Created @</strong>
          </em>
          <span>
            {`${new Date(dateCreated).toLocaleDateString("en", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })} - ${new Date(dateCreated).toLocaleTimeString("en", {
              hour: "numeric",
              minute: "numeric",
            })}`}
          </span>
        </p>
      </span>
      {completed && (
        <span className={date_style}>
          <p>
            <em>
              <strong>Completed @</strong>
            </em>
            <span>
              {`${new Date(dateCompleted).toLocaleDateString("en", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })} - ${new Date(dateCompleted).toLocaleTimeString("en", {
                hour: "numeric",
                minute: "numeric",
              })}`}
            </span>
          </p>
        </span>
      )}
    </div>
  );
};

export default DateTime;
