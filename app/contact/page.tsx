import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";

export default function ContactPage() {

  return (

    <div className="">

      <h2 className="m-4 text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">Contact</h2>


      <form name="contact" className="pr-5">

        <Input name="email" type="email" label="Email" placeholder="Enter your email" className="m-4" />
        <Input name="subject" type="text" label="Subject" className="m-4" />
        <Textarea name="message" label="Your message for me" minRows={15} className="m-4" />

        <Button size="md" color="primary" type="submit" className="m-4">Submit</Button>

      </form>

    </div>

  );
}
