
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  "apisidebar": [
    {
      "type": "doc",
      "id": "documents/network/aruba-network-api"
    },
    {
      "type": "category",
      "label": "ElasticIp",
      "items": [
        {
          "type": "doc",
          "id": "documents/network/create-elastic-ip",
          "label": "Create ElasticIp",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/network/get-elastic-ip",
          "label": "Get ElasticIp",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/network/update-elastic-ip",
          "label": "Update ElasticIp",
          "className": "api-method put"
        },
        {
          "type": "doc",
          "id": "documents/network/delete-elastic-ip",
          "label": "Delete ElasticIp",
          "className": "api-method delete"
        },
        {
          "type": "doc",
          "id": "documents/network/list-elastic-ip",
          "label": "List ElasticIp",
          "className": "api-method get"
        }
      ]
    },
    {
      "type": "category",
      "label": "LoadBalancer",
      "items": [
        {
          "type": "doc",
          "id": "documents/network/get-load-balancer",
          "label": "Get LoadBalancer",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/network/list-load-balancers",
          "label": "List LoadBalancers",
          "className": "api-method get"
        }
      ]
    },
    {
      "type": "category",
      "label": "SecurityGroup",
      "items": [
        {
          "type": "doc",
          "id": "documents/network/create-security-group",
          "label": "Create SecurityGroup",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/network/get-security-group",
          "label": "Get SecurityGroup",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/network/update-security-group",
          "label": "Update SecurityGroup",
          "className": "api-method put"
        },
        {
          "type": "doc",
          "id": "documents/network/delete-security-group",
          "label": "Delete SecurityGroup",
          "className": "api-method delete"
        },
        {
          "type": "doc",
          "id": "documents/network/list-security-groups",
          "label": "List SecurityGroups",
          "className": "api-method get"
        }
      ]
    },
    {
      "type": "category",
      "label": "SecurityRule",
      "items": [
        {
          "type": "doc",
          "id": "documents/network/create-security-rule",
          "label": "Create Security Rule",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/network/get-security-rule",
          "label": "Get Security Rule",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/network/update-security-rule",
          "label": "Update Security Rule",
          "className": "api-method put"
        },
        {
          "type": "doc",
          "id": "documents/network/delete-security-rule",
          "label": "Delete Security Rule",
          "className": "api-method delete"
        },
        {
          "type": "doc",
          "id": "documents/network/list-security-rules",
          "label": "List Security Rules",
          "className": "api-method get"
        }
      ]
    },
    {
      "type": "category",
      "label": "Subnet",
      "items": [
        {
          "type": "doc",
          "id": "documents/network/create-subnet",
          "label": "Create Subnet",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/network/get-subnet",
          "label": "Get Subnet",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/network/update-subnet",
          "label": "Update Subnet",
          "className": "api-method put"
        },
        {
          "type": "doc",
          "id": "documents/network/delete-subnet",
          "label": "Delete Subnet",
          "className": "api-method delete"
        },
        {
          "type": "doc",
          "id": "documents/network/list-subnets",
          "label": "List Subnets",
          "className": "api-method get"
        }
      ]
    },
    {
      "type": "category",
      "label": "Vpc",
      "items": [
        {
          "type": "doc",
          "id": "documents/network/create-vpc",
          "label": "Create Vpc",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/network/get-vpc",
          "label": "Get Vpc",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/network/update-vpc",
          "label": "Update Vpc",
          "className": "api-method put"
        },
        {
          "type": "doc",
          "id": "documents/network/delete-vpc",
          "label": "Delete Vpc",
          "className": "api-method delete"
        },
        {
          "type": "doc",
          "id": "documents/network/list-vpc",
          "label": "List Vpc",
          "className": "api-method get"
        }
      ]
    },
    {
      "type": "category",
      "label": "VpcPeering",
      "items": [
        {
          "type": "doc",
          "id": "documents/network/create-vpc-peering",
          "label": "Create VpcPeering",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/network/get-vpc-peering",
          "label": "Get VpcPeering",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/network/update-vpc-peering",
          "label": "Update VpcPeering",
          "className": "api-method put"
        },
        {
          "type": "doc",
          "id": "documents/network/delete-vpc-peering",
          "label": "Delete VpcPeering",
          "className": "api-method delete"
        },
        {
          "type": "doc",
          "id": "documents/network/list-vpc-peerings",
          "label": "List VpcPeerings",
          "className": "api-method get"
        }
      ]
    },
    {
      "type": "category",
      "label": "VpcPeeringRoute",
      "items": [
        {
          "type": "doc",
          "id": "documents/network/create-vpc-peering-route",
          "label": "Create VpcPeeringRoute",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/network/get-vpc-peering-route",
          "label": "Get VpcPeeringRoute",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/network/update-vpc-peering-route",
          "label": "Update VpcPeeringRoute",
          "className": "api-method put"
        },
        {
          "type": "doc",
          "id": "documents/network/delete-vpc-peering-route",
          "label": "Delete VpcPeeringRoute",
          "className": "api-method delete"
        },
        {
          "type": "doc",
          "id": "documents/network/list-vpc-peering-route",
          "label": "List VpcPeeringRoute",
          "className": "api-method get"
        }
      ]
    },
    {
      "type": "category",
      "label": "VpnRoute",
      "items": [
        {
          "type": "doc",
          "id": "documents/network/create-vpn-route",
          "label": "Create VpnRoute",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/network/get-vpn-route",
          "label": "Get VpnRoute",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/network/update-vpn-route",
          "label": "Update VpnRoute",
          "className": "api-method put"
        },
        {
          "type": "doc",
          "id": "documents/network/delete-vpn-route",
          "label": "Delete VpnRoute",
          "className": "api-method delete"
        },
        {
          "type": "doc",
          "id": "documents/network/list-vpn-routes",
          "label": "List VpnRoutes",
          "className": "api-method get"
        }
      ]
    },
    {
      "type": "category",
      "label": "VpnTunnel",
      "items": [
        {
          "type": "doc",
          "id": "documents/network/create-vpn-tunnel",
          "label": "Create VpnTunnel",
          "className": "api-method post"
        },
        {
          "type": "doc",
          "id": "documents/network/get-vpn-tunnel",
          "label": "Get VpnTunnel",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/network/get-vpn-tunnel-connection-state",
          "label": "Get VpnTunnel Connection State",
          "className": "api-method get"
        },
        {
          "type": "doc",
          "id": "documents/network/update-vpn-tunnel",
          "label": "Update VpnTunnel",
          "className": "api-method put"
        },
        {
          "type": "doc",
          "id": "documents/network/delete-vpn-tunnel",
          "label": "Delete VpnTunnel",
          "className": "api-method delete"
        },
        {
          "type": "doc",
          "id": "documents/network/list-vpn-tunnels",
          "label": "List VpnTunnels",
          "className": "api-method get"
        }
      ]
    }
  ]
};

export default sidebar.apisidebar;
  