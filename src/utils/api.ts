interface Body {
  rBody: {
    [key: string]: string | number;
  };
}

// refered from this article: (https://qiita.com/TechForGood/items/08367b676c77b1d9c9fd)
export class API {
  private path: string;
  private body: string | undefined;

  constructor(apiBaseUrl: string, endpointPath: string, body?: Body) {
    const baseUrl: string = apiBaseUrl;
    this.path = baseUrl + endpointPath + "/";
    this.body = body && JSON.stringify({ ...body });
  }

  private getBaseOptions = (method: "GET" | "POST" | "PATCH" | "DELETE"): object => {
    return {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: this.body,
    };
  };

  getMethod = (): Promise<Response> => {
    const baseOptions = this.getBaseOptions("GET");
    const fetchOptions: object = {
      ...baseOptions,
    };
    return fetch(`${this.path}`, fetchOptions);
  };

  // postMethod
  // patchMethod
  // deleteMethod
}
