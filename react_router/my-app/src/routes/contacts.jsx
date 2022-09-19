import { Form, useLoaderData } from "react-router-dom";

export function loader({ params }) {
  const contact = getContact(params.contactId);
  return contact;
}

export function createContact(newContact) {
  const newContacts = JSON.parse(localStorage.getItem("contacts"));
  newContacts.push(newContact);
  localStorage.setItem("contacts", JSON.stringify(newContacts));
}

export function updateContact(id, updateContact) {
  const contact = getContact(id);
  updateContact.favorite = contact.favorite;
  deleteContact(id);
  updateContact.id = id;
  createContact(updateContact);
}

function deleteContact(id) {
  const contacts = JSON.parse(localStorage.getItem("contacts"));
  const newContacts = contacts.filter((e) => e.id !== id);
  localStorage.setItem("contacts", JSON.stringify(newContacts));
}

export async function getContacts() {
  const respons = await fetch("/data/contact-info.json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (respons.ok) {
    const data = await respons.json();
    localStorage.setItem("contacts", JSON.stringify(data.result));
    return data;
  }

  throw Error(304);
}

function getContact(id) {
  const contacts = JSON.parse(localStorage.getItem("contacts"));
  const contact = contacts.find((e) => e.id === id);
  if (contact === undefined) throw ReferenceError("등록되지 않은 사용자!!");

  return contact;
}

export default function Contact() {
  const contact = useLoaderData();

  return (
    <div id="contact">
      <div>
        <img key={contact.avatar} src={contact.avatar || null} />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
              rel="noreferrer"
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !window.confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}
