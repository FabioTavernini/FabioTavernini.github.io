import { title } from "@/components/primitives";

import { Button } from "@nextui-org/button";

import { Input, Textarea } from "@nextui-org/input";

export default function ContactPage() {
  return (
    <div className="">

      <h1 className={title()}>Contact</h1>

      <form method="post" data-netlify="true" name="contact" className="mr-6">

        <Input type="email" label="Email" placeholder="Enter your email" className="m-4" />
        <Input type="text" label="Subject" className="m-4" />
        <Textarea label="Your message for me" minRows={15} className="m-4" />

        <Button size="md" color="primary" type="submit">Submit</Button>  

      </form>

    </div>

  );
}
