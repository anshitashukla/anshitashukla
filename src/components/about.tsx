import React from "react";
import { Row, Col } from "antd";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about">
      <Row gutter={24}>
        <Col span={12}>
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="highlight">About Me</h2>
            <p style={{ fontSize: "16px" }}>
              I'm a Full Stack Developer with over 5 years of experience in
              building scalable applications. Currently pursuing an MS in
              Computer Science at George Washington University, I specialize in
              React.js, Node.js, and AI-driven solutions. I’ve led teams to
              scale systems from 300k to 1M users and boosted revenue by 60%
              with innovative integrations.
            </p>
          </motion.div>
        </Col>
        <Col span={12}>
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              style={{
                width: "300px",
                height: "300px",
                background: "#333",
                borderRadius: "8px",
              }}
            ></div>
          </motion.div>
        </Col>
      </Row>
    </section>
  );
};

export default About;
