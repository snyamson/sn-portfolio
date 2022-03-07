import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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

  return (
    <>
      <section id="contact">
        <div className="inner">
          <section>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  console.log(values);
                  setSubmitting(false);
                  resetForm({ values: "" });
                }, 2000);
              }}
            >
              {({ handleSubmit, handleReset, isSubmitting }) => (
                <Form method="post" onSubmit={handleSubmit}>
                  <div className="fields">
                    <div className="field half">
                      <label htmlFor="name">Name</label>
                      <Field type="text" name="name" id="name" />
                      <ErrorMessage name="name" />
                    </div>
                    <div className="field half">
                      <label htmlFor="email">Email</label>
                      <Field type="text" name="email" id="email" />
                      <ErrorMessage name="email" />
                    </div>
                    <div className="field">
                      <label htmlFor="message">Message</label>
                      <Field
                        as="textarea"
                        name="message"
                        id="message"
                        rows="6"
                      />

                      <ErrorMessage name="message" />
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
