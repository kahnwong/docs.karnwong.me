---
outline: deep
---

# SRE

## Profiling

- [pyroscope](https://github.com/grafana/pyroscope) - Continuous Profiling Platform. Debug performance issues down to a single line of code .

### Cookbook

#### OTEL with Python

```bash
export OTEL_METRIC_EXPORT_INTERVAL="5000"  # so we don't have to wait 60s for metrics
export OTEL_RESOURCE_ATTRIBUTES="service.name=rolldice,service.instance.id=localhost:8082"

pip install opentelemetry-distro[otlp]
opentelemetry-bootstrap -a install

export OTEL_PYTHON_LOGGING_AUTO_INSTRUMENTATION_ENABLED=true
export OTEL_LOGS_EXPORTER=otlp
opentelemetry-instrument $ENTRYPOINT
```

compose-otel.yaml

```yaml
services:
  otel-lgtm:
    image: grafana/otel-lgtm
    ports:
      - 3000:3000
      - 4317:4317
      - 4318:4318
```

## Resources

- [Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/)
- [Truss Engineering Playbook](https://playbook.truss.dev/docs)
