import { ContentProvider } from "./content.provider";
import { createHttpFactory, SpectatorHttp } from "@ngneat/spectator";

describe("DataProviderService", () => {
  let spectator: SpectatorHttp<ContentProvider>;
  const serviceFactory = createHttpFactory(ContentProvider);

  beforeEach(() => (spectator = serviceFactory()));

  it("should be created", () => {
    expect(spectator.service).toBeTruthy();
  });
});
