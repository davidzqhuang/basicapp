export async function POST(request: Request) {
    const { value1, value2, operator } = await request.json()
    value1 as number;
    value2 as number;
    console.log("CALC", value1, value2, operator)
    if (operator === "+") {
        return Response.json({result: value1 + value2})
    } else if (operator === "-") {
        return Response.json({result: value1 - value2})
    } else if (operator === "*") {
        return Response.json({result: value1 * value2})
    } else if (operator === "/") {
        return Response.json({result: value1 / value2})
    } else {
        return new Response("Invalid operator")
    }
}