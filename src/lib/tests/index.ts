export { type TestConfig, type TestQuestion, type TestOption, type TestResultDetail } from "./types";
export { mbtiTest } from "./mbti";
export { attachmentTest } from "./attachment";
export { enneagramTest } from "./enneagram";
export { hollandTest } from "./holland";
export { adhdTest } from "./adhd";
export { eqTest } from "./eq";
export { bigfiveTest } from "./bigfive";
export { discTest } from "./disc";
export { lovelangTest } from "./lovelang";
export { iqTest } from "./iq";
export { mbti64Test } from "./mbti64";
export { hspTest } from "./hsp";
export { pleaserTest } from "./pleaser";
export { mentalBurnTest } from "./mentalburn";
export { boundaryTest } from "./boundary";
export { talent2026Test } from "./talent2026";

import { TestConfig } from "./types";
import { mbtiTest } from "./mbti";
import { attachmentTest } from "./attachment";
import { enneagramTest } from "./enneagram";
import { hollandTest } from "./holland";
import { adhdTest } from "./adhd";
import { eqTest } from "./eq";
import { bigfiveTest } from "./bigfive";
import { discTest } from "./disc";
import { lovelangTest } from "./lovelang";
import { iqTest } from "./iq";
import { mbti64Test } from "./mbti64";
import { hspTest } from "./hsp";
import { pleaserTest } from "./pleaser";
import { mentalBurnTest } from "./mentalburn";
import { boundaryTest } from "./boundary";
import { talent2026Test } from "./talent2026";

export const allTests: Record<string, TestConfig> = {
  mbti: mbtiTest,
  attachment: attachmentTest,
  enneagram: enneagramTest,
  holland: hollandTest,
  adhd: adhdTest,
  eq: eqTest,
  bigfive: bigfiveTest,
  disc: discTest,
  lovelang: lovelangTest,
  iq: iqTest,
  mbti64: mbti64Test,
  hsp: hspTest,
  pleaser: pleaserTest,
  mentalburn: mentalBurnTest,
  boundary: boundaryTest,
  talent2026: talent2026Test,
};
