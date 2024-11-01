import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";

export default function Contact() {

  return (

    <div className="">

      <h2 className="m-4 text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">Contact</h2>


      <form name="contactform" method="POST" data-netlify="true">
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Your Role: <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>

    </div>

  );
}
