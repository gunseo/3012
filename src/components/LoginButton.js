import React, { useState } from "react";

function LoginButton(){
    return (
        <FormBox onSubmit={() => {}}>
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <ButtonGroup align="justify">
                <Button
                    onPress={() => {}}
                    variant="primary"
                >
                    log in
                </Button>
            </ButtonGroup>
        </FormBox>
    );
}

export default LoginButton;