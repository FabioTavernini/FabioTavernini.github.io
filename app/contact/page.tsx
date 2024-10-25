import { title } from "@/components/primitives";

import { Button } from "@nextui-org/button";

import { Input, Textarea } from "@nextui-org/input";

export default function ContactPage() {

  return (

    <div className="">

      <h1 className={title()}>Contact</h1>

      <form name="contact" className="mr-6">

        <Input name="email" type="email" label="Email" placeholder="Enter your email" className="m-4" />
        <Input name="subject" type="text" label="Subject" className="m-4" />
        <Textarea name="message" label="Your message for me" minRows={15} className="m-4" />

        <Button size="md" color="primary" type="submit">Submit</Button>

      </form>

    </div>

  );
}
