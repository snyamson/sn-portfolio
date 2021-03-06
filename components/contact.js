import { Formik, Form, Field, ErrorMessage } from "formik";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";
import axios from "axios";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    message: Yup.string().required("Required"),
  });

  const errStyle = { color: "#ff3333", fontStyle: "italic" };

  const notify = () =>
    toast.success("Successfully Sent!", {
      position: "top-center",
      style: {
        background: "#333",
        color: "#fff",
        marginTop: "50px",
      },
    });

  return (
    <>
      <Toaster />
      <section id="contact">
        <div className="inner">
          <section>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                try {
                  axios.post("/api/contact", values);
                  setSubmitting(false);
                  resetForm({ values: "" });
                  notify();
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              {({ handleSubmit, handleReset, isSubmitting }) => (
                <Form method="post" onSubmit={handleSubmit}>
                  <div className="fields">
                    <div className="field half">
                      <label htmlFor="name">Name</label>
                      <Field type="text" name="name" id="name" />
                      <ErrorMessage
                        name="name"
                        component="div"
                        style={errStyle}
                      />
                    </div>
                    <div className="field half">
                      <label htmlFor="email">Email</label>
                      <Field type="text" name="email" id="email" />
                      <ErrorMessage
                        name="email"
                        component="div"
                        style={errStyle}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="message">Message</label>
                      <Field
                        as="textarea"
                        name="message"
                        id="message"
                        rows="6"
                      />

                      <ErrorMessage
                        name="message"
                        component="div"
                        style={errStyle}
                      />
                    </div>
                  </div>
                  <ul className="actions">
                    <li>
                      <input
                        type="submit"
                        value={isSubmitting ? "Sending" : "Send Message"}
                        className={`primary ${
                          isSubmitting ? "disabled" : null
                        }`}
                      />
                    </li>
                    <li>
                      <input type="reset" value="Clear" onClick={handleReset} />
                    </li>
                  </ul>
                </Form>
              )}
            </Formik>
          </section>
          <section className="split">
            <section>
              <div className="contact-method">
                <span className="icon solid alt fa-envelope"></span>
                <h3>Email</h3>
                <a href="mailto:info.snyamson@gmail.com?subject=Query From Portfolio">
                  info.snyamson@gmail.com
                </a>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon solid alt fa-phone"></span>
                <h3>Phone</h3>
                <span>
                  (233) 558-389-642
                  <br />
                  (233) 501-653-224
                </span>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon solid alt fa-home"></span>
                <h3>Address</h3>
                <span>
                  Mile 4 Street
                  <br />
                  Meduma
                  <br />
                  Kumasi - Ghana
                </span>
              </div>
            </section>
          </section>
        </div>
      </section>
    </>
  );
};

export default Contact;
