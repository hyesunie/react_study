import { useEffect } from "react";

function NotUseLibraryItem({ name, email, website }) {
  return (
    <li>
      <span>{name}</span>
      <span>{email}</span>
      <span>{website}</span>
    </li>
  );
}

function NotUseLibrary({ userList, isLoading, errorMsg }) {
  return (
    <>
      <section>
        <h2>NotUseLibrary</h2>
        <ul>
          {isLoading || !userList ? (
            <div>~loading~</div>
          ) : (
            userList.map((e) => (
              <NotUseLibraryItem
                key={e.id}
                name={e.name}
                email={e.email}
                website={e.website}
              />
            ))
          )}
        </ul>
      </section>
      <br />
      <hr />
    </>
  );
}

export default NotUseLibrary;
