import { BsLayoutSidebar } from "react-icons/bs";



export default function Profile() {
  return (
    <>
      <div className="TopBar"
      style={{
            width: "100%",
        }}>
        <div className="profileCont">
          <div className="profileImg">T</div>
          <p>tife2020</p>
        </div>
        <div className="NavTodoIconCont">
          <BsLayoutSidebar
            style={{
              color: "#666",
              height: "32px",
              width: "20px",
              
            }}
          />
        </div>
      </div>
    </>
  );
}
