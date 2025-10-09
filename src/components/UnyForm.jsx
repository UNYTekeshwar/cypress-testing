import React, { useState } from "react";
import { Form, Input, Button, FormRow, FormControl, Group } from "unygc";
import { useNavigate } from "react-router-dom";
import "unygc/style";
const UnyForm = () => {
  const navigate = useNavigate();
  const handleFinish = () => {
    console.log("Form submitted successfully:", { username, email, password });
    navigate("/users");
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
    <h1>Dev Branch Code..</h1>
      <Form id="createForm">
        <Group title="Form With Side label" styleType="style1">
          <FormRow cols={1} fieldAlign="side">
            <FormControl fieldId="testfield" required label="Username">
              <Input
                value={username}
                placeholder="Enter username"
                onChange={(e) => setUsername(e)}
                allowClear={true}
              />
            </FormControl>
            <FormControl fieldId="testfield" required label="Email">
              <Input
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e)}
                allowClear={true}
              />
            </FormControl>
            <FormControl fieldId="testfield" required label="Password">
              <Input
                value={password}
                placeholder="Enter password"
                onChange={(e) => setPassword(e)}
                allowClear={true}
                customIcon={
                  <>
                    <span onClick={() => {}}>
                      <em className="icon-eye" />
                    </span>
                    <span onClick={() => {}}>
                      <em className="icon-trash" />
                    </span>
                  </>
                }
              />
            </FormControl>
          </FormRow>
          <Button type="submit" className="btn-submit" onClick={handleFinish}>
            Submit
          </Button>
        </Group>
      </Form>
    </>
  );
};
export default UnyForm;
