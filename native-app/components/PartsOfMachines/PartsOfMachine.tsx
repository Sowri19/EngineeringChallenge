import React from "react";
import { Container, Title, PartText } from "./styles";

export const PartsOfMachine = ({
  machineName,
  parts,
}: {
  machineName: string;
  parts: Record<string, string>;
}) => {
  return (
    <Container>
      {parts && (
        <>
          <Title>{machineName}</Title>
          {Object.keys(parts).map((key) => (
            <PartText key={key}>
              {key}: {parts[key]}
            </PartText>
          ))}
        </>
      )}
    </Container>
  );
};
