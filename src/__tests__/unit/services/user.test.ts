import { expect } from "chai";

/**
 * @TODO adasdasdasd
 */

describe("User test", () => {
  it("Shoud run without error", async () => {
    expect(true).to.eq(true);
    await new Promise<void>((rs) => setTimeout(rs, 100));
    expect(true).to.eq(false);
    await new Promise<void>((rs) => setTimeout(rs, 90));
    expect(true).to.eq(true);
  });
});
