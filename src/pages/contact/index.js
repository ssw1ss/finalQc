import React from "react"

import { Layout } from "ui/layouts"
import { Section } from "ui/base"

const ContactPage = () => (
  <Layout>
    <Section>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="contact" value="contact" />
        <div>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </div>
        <div>
          <label>
            Message: <textarea name="message" />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </Section>
  </Layout>
)

export default ContactPage
