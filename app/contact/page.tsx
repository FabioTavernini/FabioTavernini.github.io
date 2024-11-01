import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";

export default function Contact() {

  return (

    <div className="">

      <h2 className="m-4 text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">Contact</h2>


      {/* Hidden form for Netlify */}
      <form name="contact" method="POST" data-netlify="true" className="hidden">
        <input type="hidden" name="contactform" value="contact" />
        <input type="hidden" name="email" />
        <input type="hidden" name="subject" />
        <input type="hidden" name="message" />
      </form>



      <form name="contactform" method="POST" className="pr-5">

        <input type="hidden" name="form-name" value="contactform" />

        <Input name="email" type="email" label="Email" placeholder="Enter your email" className="m-4" />
        <Input name="subject" type="text" label="Subject" className="m-4" />
        <Textarea name="message" label="Your message for me" minRows={15} className="m-4" />

        <Button size="md" color="primary" type="submit" className="m-4">Submit</Button>

      </form>

    </div>

  );
}
