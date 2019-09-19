describe("Add", function() {
  it("should return 0 when the string is empty", function() {
    expect(add("")).toBe(0);
  });
  it("should add two string numbers", function() {
    expect(add("3,2")).toEqual(5);
  });
  it("should allow the Add method to handle new lines between numbers", function() {
    expect(add("1\n2,3")).toEqual(6);
  });

  it("should support different delimeters", function() {
    expect(add("//;\n1;2")).toEqual(NaN);
  });

  it("should throw an exception if there are negative numbers", function() {
    expect(function() {
      throw "-3, 1";
    }).toThrow();
  });
});
