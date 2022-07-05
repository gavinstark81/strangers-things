import { createUser } from "api/apiRegister";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  let navigate = useNavigate();

  const [name, setName] = useState("");

  return (
    <div>
      <div>TESTING LOGIN/REGISTER LINK</div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await createUser(name);
        }}
      />
    </div>
  );
}
