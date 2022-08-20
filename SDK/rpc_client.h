﻿#pragma once

#include "rpc_h.h"

RPC_STATUS RpcConnectServer();
RPC_STATUS RpcDisconnectServer();

int RpcEnableReceiveMsg();
int RpcDisableReceiveMsg();
int RpcIsLogin();
int RpcSendTextMsg(const wchar_t *wxid, const wchar_t *at_wxid, const wchar_t *msg);
int RpcSendImageMsg(const wchar_t *wxid, const wchar_t *path);
PPRpcIntBstrPair RpcGetMsgTypes(int *pNum);
PPRpcContact RpcGetContacts(int *pNum);
BSTR *RpcGetDbNames(int *pNum);
PPRpcTables RpcGetDbTables(const wchar_t *db, int *pNum);