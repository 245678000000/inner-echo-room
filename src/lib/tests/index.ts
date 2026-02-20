export { type TestConfig, type TestQuestion, type TestOption, type TestResultDetail } from "./types";
export { mbtiTest } from "./mbti";
export { attachmentTest } from "./attachment";
export { enneagramTest } from "./enneagram";
export { hollandTest } from "./holland";
export { adhdTest } from "./adhd";
export { eqTest } from "./eq";

import { TestConfig } from "./types";
import { mbtiTest } from "./mbti";
import { attachmentTest } from "./attachment";
import { enneagramTest } from "./enneagram";
import { hollandTest } from "./holland";
import { adhdTest } from "./adhd";
import { eqTest } from "./eq";

export const allTests: Record<string, TestConfig> = {
  mbti: mbtiTest,
  attachment: attachmentTest,
  enneagram: enneagramTest,
  holland: hollandTest,
  adhd: adhdTest,
  eq: eqTest,
};
