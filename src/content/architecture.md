---
title: OpenHIT.
header: OpenHIT Architecture
---

<div class="mainhelp">
    <span class="mainhelp__ico">{{>ico_help}}</span>
    <div class="mainhelp__window">
        <div class="mainhelp__window-title">HELP</div>
        <div class="mainhelp__window-wrap">
            {{md 'src/texts/help/logical.architecture.help.eamy.org.md' }}
        </div>
    </div>
</div>

<nav class="main-subnav">
    <a href="/architecture-core-concepts.html" class="main-subnav__item">Core concepts</a>
    <span class="main-subnav__item">Logical architecture</span>
    <a href="/architecture-reference.html" class="main-subnav__item">Reference architecture</a>
</nav>

<div class="logical-architecture scheme">
    <div class="scheme__bg"></div>
    <div class="scheme__blocked"></div>

    <div class="scheme-block scheme-block_size_1 scheme-block_left_1" id="la1">
        <div class="scheme-block__header">
            <b class="scheme-block__header-wrap">Database</b>
        </div>
        <div class="scheme-block__body">
            {{md 'src/texts/architecture/logical/database.logical.architecture.openhit.md' }}
        </div>
    </div>

    <div class="scheme-block scheme-block_size_1 scheme-block_left_1" id="la2">
        <div class="scheme-block__header">
            <b class="scheme-block__header-wrap">Internal system</b>
        </div>
        <div class="scheme-block__body">
            {{md 'src/texts/architecture/logical/internal_system.logical.architecture.openhit.md' }}
        </div>
    </div>

    <div class="scheme-block scheme-block_size_1 scheme-block_left_1" id="la3">
        <div class="scheme-block__header">
            <b class="scheme-block__header-wrap"><b>SOAP</b><br/> proxy service</b>
        </div>
        <div class="scheme-block__body">
            {{md 'src/texts/architecture/logical/soap_proxy.logical.architecture.openhit.md' }}
        </div>
    </div>

    <div class="scheme-block scheme-block_size_1 scheme-block_left_1 bottom" id="la4">
        <div class="scheme-block__header">
            <b class="scheme-block__header-wrap">Internal system</b>
        </div>
        <div class="scheme-block__body">
            {{md 'src/texts/architecture/logical/internal_system.logical.architecture.openhit.md' }}
        </div>
    </div>

    <div class="scheme-block scheme-block_size_1 scheme-block_left_2" id="la5">
        <div class="scheme-block__header">
            <b class="scheme-block__header-wrap">REST service</b>
        </div>
        <div class="scheme-block__body">
            {{md 'src/texts/architecture/logical/rest_service.logical.architecture.openhit.md' }}
        </div>
    </div>

    <div class="scheme-block scheme-block_size_1 scheme-block_left_2" id="la6">
        <div class="scheme-block__header">
            <b class="scheme-block__header-wrap">REST service</b>
        </div>
        <div class="scheme-block__body">
            {{md 'src/texts/architecture/logical/rest_service.logical.architecture.openhit.md' }}
        </div>
    </div>

    <div class="scheme-block scheme-block_size_1 scheme-block_left_2 bottom" id="la7">
        <div class="scheme-block__header">
            <b class="scheme-block__header-wrap">REST service</b>
        </div>
        <div class="scheme-block__body">
            {{md 'src/texts/architecture/logical/rest_service.logical.architecture.openhit.md' }}
        </div>
    </div>


    <div class="scheme-block scheme-block_size_1 scheme-block_type_2 scheme-block_left_2" id="la8">
        <div class="scheme-block__header">
            <b class="scheme-block__header-wrap">Data sharing services</b>
        </div>
        <div class="scheme-block__body">
            {{md 'src/texts/architecture/logical/data_sharing.logical.architecture.openhit.md' }}
        </div>
    </div>


    <div class="scheme-block scheme-block_size_1 scheme-block_type_2 scheme-block_left_2" id="la9">
        <div class="scheme-block__header">
            <b class="scheme-block__header-wrap">Data validation services</b>
        </div>
        <div class="scheme-block__body">
            {{md 'src/texts/architecture/logical/data_validation.logical.architecture.openhit.md' }}
        </div>
    </div>


    <div class="scheme-block scheme-block_size_1-2 scheme-block_type_2 scheme-block_left_3" id="la10">
        <div class="scheme-block__header">
            <b class="scheme-block__header-wrap">Message internal routing &amp; processing engine</b>
        </div>
        <div class="scheme-block__body">
            {{md 'src/texts/architecture/logical/MIPRE.logical.architecture.openhit.md' }}
        </div>
    </div>

    <div class="scheme-block scheme-block_size_1-2 scheme-block_type_2 scheme-block_left_3 bottom" id="la11">
        <div class="scheme-block__header">
            <b class="scheme-block__header-wrap">Message external routing engine (MERE)</b>
        </div>
        <div class="scheme-block__body">
            {{md 'src/texts/architecture/logical/MERE.logical.architecture.openhit.md' }}
        </div>
    </div>

    <div class="scheme-block scheme-block_size_1 scheme-block_type_2 scheme-block_left_3 bottom" id="la12">
        <div class="scheme-block__header">
            <b class="scheme-block__header-wrap">Application heap</b>
        </div>
        <div class="scheme-block__body">
            {{md 'src/texts/architecture/logical/app_heap.logical.architecture.openhit.md' }}
        </div>
    </div>

    <div class="scheme-block scheme-block_size_1 scheme-block_type_2 scheme-block_left_5 right" id="la13">
        <div class="scheme-block__header">
            <b class="scheme-block__header-wrap">Pipelines &amp; rules</b>
        </div>
        <div class="scheme-block__body">
            {{md 'src/texts/architecture/logical/pipelines_rules.logical.architecture.openhit.md' }}
        </div>
    </div>

    <div class="scheme-block scheme-block_size_1 scheme-block_type_2 scheme-block_left_5 right" id="la14">
        <div class="scheme-block__header">
            <b class="scheme-block__header-wrap">Context state</b>
        </div>
        <div class="scheme-block__body">
            {{md 'src/texts/architecture/logical/context_state.logical.architecture.openhit.md' }}
        </div>
    </div>

    <div class="scheme-block scheme-block_size_1 scheme-block_type_2 scheme-block_left_4" id="la15">
        <div class="scheme-block__header">
            <b class="scheme-block__header-wrap">Security provider</b>
        </div>
        <div class="scheme-block__body">
            {{md 'src/texts/architecture/logical/security_provider.logcal.architecture.openhit.md' }}
        </div>
    </div>

    <div class="scheme-block scheme-block_size_1 scheme-block_type_2 scheme-block_left_5 right bottom" id="la16">
        <div class="scheme-block__header">
            <b class="scheme-block__header-wrap">Transport subsystem</b>
        </div>
        <div class="scheme-block__body">
            {{md 'src/texts/architecture/logical/transport_subsystem.logical.architecture.openhit.md' }}
        </div>
    </div>

    <div class="scheme-block scheme-block_size_1 scheme-block_type_1 scheme-block_left_5 right bottom" id="la17">
        <div class="scheme-block__header">
            <b class="scheme-block__header-wrap">Applications</b>
        </div>
        <div class="scheme-block__body">
            {{md 'src/texts/architecture/logical/applications.logical.architecture.openhit.md' }}
        </div>
    </div>

    <div class="scheme-block scheme-block_size_1 scheme-block_type_3 scheme-block_left_7 right" id="la18">
        <div class="scheme-block__header">
            <b class="scheme-block__header-wrap">Processing domain</b>
        </div>
        <div class="scheme-block__body">
            {{md 'src/texts/architecture/logical/processing_domain.logical.architecture.openhit.md' }}
        </div>
    </div>

    <div class="scheme-block scheme-block_size_1 scheme-block_type_4 scheme-block_left_6 right bottom" id="la19">
        <div class="scheme-block__header">
            <b class="scheme-block__header-wrap">External Systems</b>
        </div>
        <div class="scheme-block__body">
            {{md 'src/texts/architecture/logical/external_systems.logical.architecture.openhit.md' }}
        </div>
    </div>

</div>
