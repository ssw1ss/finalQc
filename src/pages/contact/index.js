import React from "react"

import { Box } from "@rebass/emotion"
import { Layout } from "ui/layouts"
import { H1, Flex, Text, Button, Section } from "ui/base"
import { css } from "@emotion/core"

const inputStyles = css`
  border-radius: 3px;
  border: 1px solid;
  border-color: #ccc;
  padding: 0.5rem;
  font-size: 1rem;
  color: #777;
  width: 100%;
  margin-bottom: 1rem;
  font-family: "Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  &:focus {
    border-color: #777;
    color: #222;
  }
`

const ContactPage = () => (
  <Layout>
    <Section>
      <Box width={["100%", "100%", "50%"]} mx="auto">
        <Box mb={5}>
          <H1 textAlign="center">Say Hello!</H1>
          <Text textAlign="center" mt={4} fontSize={5}>
            Got any business inquiries, questions, comments or concerns? Leave a
            message here and we’ll get back to you as soon as possible!
          </Text>
        </Box>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          style={{ width: "100%" }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <Box>
            <label>
              Your Name:{" "}
              <input
                placeholder="Name"
                css={inputStyles}
                type="text"
                name="name"
              />
            </label>
          </Box>
          <Box>
            <label>
              Your Email:{" "}
              <input
                placeholder="Email"
                css={inputStyles}
                type="email"
                name="email"
              />
            </label>
          </Box>
          <Box>
            <label>
              Message:{" "}
              <textarea
                placeholder="Leave us a message"
                rows="5"
                css={inputStyles}
                name="message"
              />
            </label>
          </Box>
          <Box>
            <Button
              as="input"
              type="submit"
              value="Submit"
              css={{ outline: "none", border: "none", cursor: "pointer" }}
            />
          </Box>
        </form>
      </Box>
    </Section>
  </Layout>
)

export default ContactPage
