import React from 'react';
import { Input } from "../input";
import { FormPersonalDetails as data } from "./config";

export const Inputs = () => {
  return (
    <>
      <Input
        labelName={data.fullname.label}
        id={data.fullname.id}
        type={data.fullname.type}
      />

      <Input
        labelName={data.email.label}
        id={data.email.id}
        type={data.email.type}
      />

      <Input
        labelName={data.address.label}
        id={data.address.id}
        type={data.address.type}
      />

      <Input
        labelName={data.phone.label}
        id={data.phone.id}
        type={data.phone.type}
      />
    </>
  );
};
